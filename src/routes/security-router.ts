import {ISecurityRouterController, Route, RouterMethod} from "../types";
import {securityRouterController} from "../controllers/SecurityRouterController";
import {authTokenRefreshValidation} from "../middlewares/auth-token-refresh-validation";


export const securityDevicesRoute: Route<ISecurityRouterController> = {
    route: "/security/devices",
    method: RouterMethod.GET,
    controller: securityRouterController,
    action: 'getAll',
    middlewares: [
        authTokenRefreshValidation,
    ]
}

export const securityDeleteDeviceRoute: Route<ISecurityRouterController> = {
    route: "/security/devices/:id",
    method: RouterMethod.DELETE,
    controller: securityRouterController,
    action: 'deleteDevice',
    middlewares: [
        authTokenRefreshValidation,
    ]
}

export const securityDeleteAllRoute: Route<ISecurityRouterController> = {
    route: "/security/devices",
    method: RouterMethod.DELETE,
    controller: securityRouterController,
    action: 'deleteAll',
    middlewares: [
        authTokenRefreshValidation,
    ]
}

export const securityRoutes: Route<ISecurityRouterController>[] = [
    securityDevicesRoute,
    securityDeleteDeviceRoute,
    securityDeleteAllRoute,
];