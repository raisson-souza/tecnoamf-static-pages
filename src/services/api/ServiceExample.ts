/* eslint-disable @typescript-eslint/no-explicit-any */
import Endpoints from "./base/Endpoints"

export default abstract class ServiceExample extends Endpoints {
    static async GetExample() {
        return await this.Get<any>({
            url: "/",
        })
    }

    static async PostExample(body: any) {
        return await this.Post<any>({
            url: "/",
            body: body,
        })
    }

    static async PutExample(body: any) {
        return await this.Put<any>({
            url: "/",
            body: body,
        })
    }

    static async DeleteExample() {
        return await this.Delete<any>({
            url: "/",
        })
    }
}
