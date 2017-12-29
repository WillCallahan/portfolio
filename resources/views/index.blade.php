@extends('layouts.spa')

@section('css')
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('javascript')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection

@section('content')
    <h2 style="text-align: center"> Laravel and React application </h2>
    <div id="root"></div>
    <div id="example"></div>
@endsection