<?php

namespace App\Http\Middleware;

use Closure;

class HandleInertiaRequests
{
    public function handle($request, Closure $next)
    {
        // Your middleware logic here
        return $next($request);
    }
}
