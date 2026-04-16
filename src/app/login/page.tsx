"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-[#f1e1b8] bg-white p-8 text-sm text-zinc-600 shadow-[0_20px_70px_rgba(120,86,0,0.12)]">
          Đang tải...
        </div>
      }
    >
      <LoginPageInner />
    </Suspense>
  );
}

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextPath = searchParams.get("next") ?? "/";
  const oauthError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  async function onSignInEmail(e: React.FormEvent) {
    e.preventDefault();
    setNotice(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setNotice(error.message);
        return;
      }
      router.push(nextPath);
    } finally {
      setLoading(false);
    }
  }

  async function onSignInGoogle() {
    setNotice(null);
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            prompt: "select_account",
            access_type: "offline",
          },
          redirectTo,
        },
      });
      if (error) setNotice(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 p-4">
      <div className="relative overflow-hidden rounded-3xl border border-[#f1e1b8] bg-white shadow-[0_20px_70px_rgba(120,86,0,0.12)] w-full max-w-md">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,215,128,0.22),rgba(255,255,255,0)_55%)]" />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f3e6c4] bg-[#fffaf0] px-3 py-1 text-xs font-semibold tracking-wide text-[#7a5a00]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                E-Learning
              </div>
              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-[#1b1b1b]">
                Chào mừng trở lại
              </h1>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Đăng nhập để tiếp tục hành trình học tập của bạn.
              </p>
            </div>
          </div>

          {(oauthError || notice) && (
            <div className="mt-4 rounded-2xl border border-[#f1e1b8] bg-[#fffaf0] p-4 text-sm text-[#5b4300]">
              <div className="font-semibold">Thông báo</div>
              <div className="mt-1 leading-6">
                {notice ??
                  (oauthError === "oauth"
                    ? "Đăng nhập Google thất bại hoặc bị huỷ. Vui lòng thử lại."
                    : "Có lỗi xảy ra.")}
              </div>
            </div>
          )}

          <form onSubmit={onSignInEmail} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-zinc-800">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@domain.com"
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-[#d4af37] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-zinc-800">Mật khẩu</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-[#d4af37] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#f3e6c4,#d4af37,#f3e6c4)] px-4 py-3 text-sm font-extrabold tracking-wide text-[#3a2a00] shadow-[0_10px_30px_rgba(212,175,55,0.28)] transition hover:brightness-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative">
                {loading ? "Đang xử lý..." : "Đăng nhập"}
              </span>
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),rgba(255,255,255,0)_55%)]" />
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <div className="text-xs font-semibold tracking-wide text-zinc-500">
              hoặc
            </div>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <button
            type="button"
            onClick={onSignInGoogle}
            disabled={loading}
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Tiếp tục với Google
          </button>

          <p className="mt-6 text-center text-sm leading-5 text-zinc-500">
            Chưa có tài khoản?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#6b4d00] underline decoration-[#d4af37]/60 underline-offset-4 hover:decoration-[#d4af37]"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>

        <div className="relative border-t border-[#f1e1b8] bg-[#fffaf0] px-6 py-4 text-xs text-zinc-600 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-semibold text-zinc-800">Gợi ý:</span>{" "}
              Cần bật provider Google trong Supabase và thêm Redirect URL.
            </div>
            <Link
              href="/"
              className="font-semibold text-[#6b4d00] underline decoration-[#d4af37]/60 underline-offset-4 hover:decoration-[#d4af37]"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
