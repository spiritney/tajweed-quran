import { redirect } from "@sveltejs/kit";

export const ssr = false

export const load = async () => {
    redirect(307, "/q/1")
};

