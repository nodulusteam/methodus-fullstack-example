import { Injectable } from "@angular/core";
import { LocalController } from "@todo/client";
import { MethodType } from "@methodus/client";
import { Injector } from "@methodus/client";

(window as any).METHODUS_CONFIG = {
  LocalController: { methodType: MethodType.Http }
};

export * from "@todo/client";

@Injectable()
export class ContractsService {
  localController: LocalController = Injector.get<LocalController>(
    "LocalController"
  );
}
