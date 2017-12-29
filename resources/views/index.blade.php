@extends('layouts.spa')

@section('title', 'Portfolio - William Callahan')

@section('css')
    <link href="{{ mix('css/theme.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('javascript')
    <script src="{{ mix('js/app.js') }}"></script>

    <!-- region Theme JavaScript -->
    <!-- WOW - Reveal Animations When You Scroll -->
    <script src="{{ asset("public/js/theme/wow.min.js") }}"></script>
    <!-- Fitvids -->
    <script src="{{ asset("public/js/theme/jquery.fitvids.js") }}"></script>
    <!-- jqBootstrapValidation -->
    <script src="{{ asset("public/js/theme/jqBootstrapValidation.js") }}"></script>
    <!-- Custom scripts -->
    <script src="{{ asset("public/js/theme/custom.js") }}"></script>
    <!-- endregion -->
@endsection

@section('content')
    <div class="container-full" id="content"></div>
@endsection