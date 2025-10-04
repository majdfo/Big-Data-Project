import AuthForm from "./components/AuthForm";

export default function App() {
  return (
    <main style={{ maxWidth: 560, margin: "32px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 16 }}>BloomWatch</h1>
      <AuthForm />
    </main>
  );
}
