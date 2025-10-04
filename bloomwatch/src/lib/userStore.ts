import { db } from "../firebase";
import { doc, setDoc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";

export async function saveUserProfile(uid: string, email: string) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      email,
      subscribed: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } else {
    await updateDoc(ref, { email, updatedAt: serverTimestamp() });
  }
}
