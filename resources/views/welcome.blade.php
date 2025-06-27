<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta name="description" content="This website contains information and content provided solely for informational purposes, meaning that individuals who visit the website should not take it as professional advice. As such, all information, content, materials, or data made available to you through this website, is not in any case intended to substitute or replace any professional advice.">
    <link rel="preload" as="image" href="/img/hero/hero-invest.jpg" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Avenir:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://unpkg.com/split-type"></script>
    <title>Relocation</title>
    @vite(['resources/less/app.less', 'resources/js/app.js'])
</head>
<body>
    <div id="app" class="app">
        <section-header></section-header>
        <div class="fullscreen scrollbar-container" data-scroll-container>
            <router-view></router-view>
        </div>
        @include('partials.footer')
    </div>
<script>
    // window.endpoints = @json([
    //     'services' => [
    //         'show' => route('api.services.show', ''),
    //     ],
    // ]);
    // console.log('window.endpoints:', window.endpoints);
</script>


</body>
</html>
