import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
export default function HomePage() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      /** Check If the User's is logged in
       * If Logged In, then Redirect to the [userId] page
       * else redirect to sign-in page
       */
      let userId;
      if (loggedIn) {
        router.push("/" + userId);
      } else {
        router.push("/sign-in");
      }
    })();
  }, [router, loggedIn]);
}
