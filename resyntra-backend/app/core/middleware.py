import time

from fastapi import Request


async def log_requests(
    request: Request,
    call_next,
):
    start = time.time()

    response = await call_next(request)

    process_time = round(
        time.time() - start,
        3,
    )

    response.headers["X-Process-Time"] = str(
        process_time
    )

    return response