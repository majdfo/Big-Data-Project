import { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { saveUserProfile } from "../lib/userStore";

export default function AuthForm() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u?.uid && u.email) await saveUserProfile(u.uid, u.email);
    });
    return () => unsub();
  }, []);

  const submit = async () => {
    const cred =
      mode === "signup"
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
    if (cred.user.email) await saveUserProfile(cred.user.uid, cred.user.email);
    setEmail("");
    setPassword("");
  };

  if (user) {
    return (
      <div style={{ border: "1px solid #333", padding: 12, borderRadius: 8 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Welcome</div>
        <div style={{ marginBottom: 8, fontSize: 14, opacity: 0.8 }}>{user.email}</div>
        <button onClick={() => signOut(auth)} style={{ padding: "6px 12px" }}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #333", padding: 12, borderRadius: 8 }}>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>
        {mode === "signup" ? "Create account" : "Sign in"}
      </div>
      <input
        type="email"
        placeholder="you@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <input
        type="password"
        placeholder="Password (min 6 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button onClick={submit} style={{ padding: "6px 12px" }}>
          {mode === "signup" ? "Sign up" : "Sign in"}
        </button>
        {mode === "login" && (
          <button
            onClick={() => email && sendPasswordResetEmail(auth, email)}
            style={{ padding: "6px 12px" }}
          >
            Forgot password?
          </button>
        )}
      </div>
      <button
        onClick={() => setMode(mode === "signup" ? "login" : "signup")}
        style={{ background: "none", border: "none", color: "#6ea8fe", cursor: "pointer" }}
      >
        {mode === "signup" ? "Have an account? Sign in" : "New user? Create account"}
      </button>
    </div>
  );
}
