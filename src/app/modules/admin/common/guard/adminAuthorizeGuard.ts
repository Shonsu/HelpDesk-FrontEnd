import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { JwtService } from "src/app/modules/common/service/jwt.service";

export const AdminAuthorizeGuard = () => {
    const jwtService = inject(JwtService);
    const router = inject(Router);

    if (!(jwtService.isLoggedIn() && jwtService.checkRoleInToken("ROLE_ADMIN"))) {
        jwtService.removetoken();
        return router.navigate(["/admin/login"]);
    }
    return true;
}