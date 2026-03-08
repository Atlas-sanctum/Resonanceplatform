import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import { AtmosphereMap } from "./components/AtmosphereMap";
import { Analytics } from "./components/Analytics";
import { HapticControl } from "./components/HapticControl";
import { ClassroomUseCase } from "./components/ClassroomUseCase";
import { WorkplaceMeeting } from "./components/WorkplaceMeeting";
import { SocialNavigation } from "./components/SocialNavigation";
import { EthicsPrivacy } from "./components/EthicsPrivacy";
import { FutureVision } from "./components/FutureVision";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "atmosphere-map", Component: AtmosphereMap },
      { path: "analytics", Component: Analytics },
      { path: "haptic-control", Component: HapticControl },
      { path: "classroom", Component: ClassroomUseCase },
      { path: "workplace", Component: WorkplaceMeeting },
      { path: "social-navigation", Component: SocialNavigation },
      { path: "ethics", Component: EthicsPrivacy },
      { path: "vision", Component: FutureVision },
    ],
  },
]);
