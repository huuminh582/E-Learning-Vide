"use client";

import { createSupabaseBrowserClient } from "@/src/lib/supabase/browser";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

type Mode = "signIn" | "signUp";

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

  const nextPath = searchParams.get("next") ?? "/admin/";
  const oauthError = searchParams.get("error");

  const [mode, setMode] = useState<Mode>("signIn");
  const [fullName, setFullName] = useState("");
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
      
      if (data?.user) {
        const { data: roleData } = await supabase
          .from("user_roles")
          .select("role_id")
          .eq("user_id", data.user.id)
          .single();

        if (roleData?.role_id === 2 || roleData?.role_id === 1) {
          router.push("/admin/");
        } else if (roleData?.role_id === 3) {
          router.push("/");
        } else {
          router.push(nextPath);
        }
      } else {
        router.push(nextPath);
      }
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  async function onSignUpEmail(e: React.FormEvent) {
    e.preventDefault();
    setNotice(null);
    setLoading(true);
    try {
      const normalizedFullName = fullName.trim();

      if (!normalizedFullName) {
        setNotice("Vui lòng nhập họ và tên.");
        return;
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: normalizedFullName,
          },
        },
      });
      if (error) {
        setNotice(error.message);
        return;
      }
      setNotice("Đăng ký thành công. Hãy kiểm tra email để xác nhận tài khoản");
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
    <div className="relative overflow-hidden rounded-3xl border border-[#f1e1b8] bg-white shadow-[0_20px_70px_rgba(120,86,0,0.12)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,215,128,0.22),rgba(255,255,255,0)_55%)]" />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f3e6c4] bg-[#fffaf0] px-3 py-1 text-xs font-semibold tracking-wide text-[#7a5a00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              Royal Access
            </div>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-[#1b1b1b]">
              Chào mừng trở lại
            </h1>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Đăng nhập hoặc tạo tài khoản mới với Supabase.
            </p>
          </div>
        </div>

        <div className="mt-6 flex rounded-2xl border border-[#f1e1b8] bg-[#fffdf7] p-1">
          <button
            type="button"
            onClick={() => {
              setMode("signIn");
              setNotice(null);
              setFullName("");
            }}
            className={classNames(
              "flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition",
              mode === "signIn"
                ? "bg-white text-[#6b4d00] shadow-sm"
                : "text-zinc-600 hover:text-zinc-800",
            )}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("signUp");
              setNotice(null);
            }}
            className={classNames(
              "flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition",
              mode === "signUp"
                ? "bg-white text-[#6b4d00] shadow-sm"
                : "text-zinc-600 hover:text-zinc-800",
            )}
          >
            Đăng ký
          </button>
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

        <form
          onSubmit={mode === "signIn" ? onSignInEmail : onSignUpEmail}
          className="mt-6 space-y-4"
        >
          {mode === "signUp" && (
            <div>
              <label className="text-sm font-semibold text-zinc-800">Họ và tên</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                autoComplete="name"
                placeholder="Nguyễn Văn A"
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-[#d4af37] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
                required
                disabled={loading}
              />
            </div>
          )}

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
            <div className="flex items-center justify-between gap-3">
              <label className="text-sm font-semibold text-zinc-800">Mật khẩu</label>
              <div className="text-xs font-medium text-zinc-500">
                {mode === "signUp" ? "Tối thiểu 6 ký tự" : null}
              </div>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete={mode === "signUp" ? "new-password" : "current-password"}
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-[#d4af37] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#f3e6c4,#d4af37,#f3e6c4)] px-4 py-3 text-sm font-extrabold tracking-wide text-[#3a2a00] shadow-[0_10px_30px_rgba(212,175,55,0.28)] transition hover:brightness-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="relative">
              {loading
                ? "Đang xử lý..."
                : mode === "signIn"
                  ? "Đăng nhập"
                  : "Tạo tài khoản"}
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

        <p className="mt-6 text-xs leading-5 text-zinc-500">
          Bằng cách tiếp tục, bạn đồng ý với các điều khoản của ứng dụng. (Bạn có
          thể tuỳ chỉnh nội dung này sau.)
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
  );
}
