@extends('layouts.spa')

@section('title', 'Portfolio - William Callahan')

@section('css')
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">

    <!-- region Theme CSS -->

    <!-- Owl Carousel -->
    <link href="{{ asset("public/css/theme/owl.theme.css") }}" rel="stylesheet">
    <link href="{{ asset("public/css/theme/owl.carousel.css") }}" rel="stylesheet">

    <!-- Magnific-popup lightbox -->
    <link href="{{ asset("public/css/theme/magnific-popup.css") }}" rel="stylesheet">

    <!-- Simple text rotator -->
    <link href="{{ asset("public/css/theme/simpletextrotator.css") }}" rel="stylesheet">

    <!-- Font Awesome CSS -->
    <link href="{{ asset("public/css/theme/font-awesome.min.css") }}" rel="stylesheet" media="screen">

    <!-- Animate css -->
    <link href="{{ asset("public/css/theme/animate.css") }}" rel="stylesheet">

    <!-- Custom styles CSS -->
    <link href="{{ asset("public/css/theme/style.css") }}" rel="stylesheet" media="screen">

    <!-- endregion -->

@endsection

@section('javascript')
    <script src="{{ mix('js/app.js') }}"></script>

    <!-- region Theme JavaScript -->
    <!-- jQuery -->
{{--    <script src="{{ asset("public/js/theme/jquery-1.11.0.min.js") }}"></script>--}}
    <!-- Background slider -->
    <script src="{{ asset("public/js/theme/jquery.backstretch.min.js") }}"></script>
    <!-- OwlCarousel -->
    <script src="{{ asset("public/js/theme/owl.carousel.min.js") }}"></script>
    <!-- Modal for portfolio -->
    <script src="{{ asset("public/js/theme/jquery.magnific-popup.min.js") }}"></script>
    <!-- Text rotator -->
    <script src="{{ asset("public/js/theme/jquery.simple-text-rotator.min.js") }}"></script>
    <!-- Waypoints -->
    <script src="{{ asset("public/js/theme/jquery.waypoints.js") }}"></script>
    <!-- CountTo  -->
    <script src="{{ asset("public/js/theme/jquery.countTo.js") }}"></script>
    <!-- WOW - Reveal Animations When You Scroll -->
    <script src="{{ asset("public/js/theme/wow.min.js") }}"></script>
    <!-- Smooth scroll -->
    <script src="{{ asset("public/js/theme/smoothscroll.js") }}"></script>
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