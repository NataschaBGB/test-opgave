import { NextResponse } from "next/server";

export default async function proxy(request) {

    const cookies = request.cookies;

    if (!cookies.has("FD_AUTH_TOKEN")) {
        return NextResponse.redirect(new URL("/log-ind?message=Du skal være logget ind for at se dashboard", request.url));
    };

};

export const config = {
	matcher: ["/dashboard/:path*"]
};