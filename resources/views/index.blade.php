@extends('layouts.spa')

@section('title', 'Portfolio - William Callahan')

@section('css')
    <link href="{{ mix('css/theme.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('javascript')
    <!-- region JavaScript -->
    <!-- React App  -->
    <script src="{{ mix('js/app.js') }}"></script>
    <!-- WOW - Reveal Animations When You Scroll -->
    <script src="{{ mix("js/theme/wow.js") }}"></script>
    <!-- Fitvids -->
    <script src="{{ mix("js/theme/jquery.fitvids.js") }}"></script>
    <!-- jqBootstrapValidation -->
    <script src="{{ mix("js/theme/jqBootstrapValidation.js") }}"></script>
    <!-- Custom scripts -->
    <script src="{{ mix("js/theme/theme.js") }}"></script>
    <!-- endregion -->
@endsection

@section('content')
    <div class="container-full" id="content"></div>
@endsection