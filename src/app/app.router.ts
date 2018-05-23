import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PostPageComponent } from "./pages/post-page/post-page.component";
import { ErrorNotFoundPageComponent } from "./pages/error-not-found-page/error-not-found-page.component";

const routes: Routes = [
  // home
  {
    path: "",
    component: HomePageComponent
  },
  // blog post
  {
    path: ":slug/:id",
    component: PostPageComponent
  },
  // handling 404
  {
    path: "**",
    component: ErrorNotFoundPageComponent
  }
];

export const RoutingModule = RouterModule.forRoot ( routes );