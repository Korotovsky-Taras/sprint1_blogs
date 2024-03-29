import {ILogsRouterController, Route, RouterMethod} from "../types";
import {logsRouterController} from "../controllers/LogsRouterController";

export const logsRoute: Route<ILogsRouterController> = {
    route: "/logs",
    method: RouterMethod.GET,
    controller: logsRouterController,
    action: 'getAll',
}

export const clearLogsRoute: Route<ILogsRouterController> = {
    route: "/logs",
    method: RouterMethod.DELETE,
    controller: logsRouterController,
    action: 'deleteAll',
}

export const logsRoutes: Route<ILogsRouterController>[] = [
    logsRoute,
    clearLogsRoute,
];





