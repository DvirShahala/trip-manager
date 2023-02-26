import { ICache } from "../types/cache";

export class CacheService {
  protected cache: {};

  constructor() {
    this.cache = {};
  }

  public upsertEntity(cacheObject: any, key: string) {
    (this.cache as ICache)[key] = cacheObject;
  }

  public getByKey(key: string): any {
    return (this.cache as ICache)[key];
  }

  public getCache() {
    return this.cache;
  }

  public deleteFromCache(key: string) {
    delete (this.cache as ICache)[key];
  }
}
