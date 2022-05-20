import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";
// import { Image } from "./components/organisms/user/human.jpg";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}
