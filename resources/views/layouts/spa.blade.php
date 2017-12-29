<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        @include('includes.head')

        @yield('css')
    </head>
    <body>
        @yield('content')
        @yield('javascript')
    </body>
</html>