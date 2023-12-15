<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!-- set favicon -->
    <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>NCA Blog | Admin</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js" integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.js"></script>
    <link href="{{url('/adminpanel/font-awesome/css/font-awesome.css')}}" rel="stylesheet">

    <!-- Toastr style -->
    <link href="{{url('/adminpanel/css/plugins/toastr/toastr.min.css')}}" rel="stylesheet">
    <!-- Sweet ALert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- Gritter -->
    <link href="{{url('/adminpanel/js/plugins/gritter/jquery.gritter.css')}}" rel="stylesheet">

    <link href="{{url('/adminpanel/css/animate.css')}}" rel="stylesheet">
    <link href="{{url('/adminpanel/css/style.css')}}" rel="stylesheet">
    <style>
        a {
            text-decoration: none;
        }

        .dataTables_filter input {
            margin-bottom: 10px;
        }

        #cropContainer {
            align-self: center;
            width: 500px;
            height: 285px;
            overflow: hidden;
        }

        .embed-1080p>iframe {
            height: 600px !important;
        }

        .ck.ck-editor__editable {
            min-height: 300px !important;
            /* Adjust the height here */
        }

        /* .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted black;
        }

        .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;

            position: absolute;
            z-index: 1;
        }

        .tooltip:hover .tooltiptext {
            visibility: visible;
        } */
        .icon-btn {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
        }
    </style>
    <script src="https://cdn.ckeditor.com/ckeditor5/40.1.0/super-build/ckeditor.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
</head>

<body>
    <div id="wrapper">
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <img alt="image" class="rounded-circle" style="width: 48px; height: 48px;" src="{{asset('uploads/profile/' . (Auth::user()->profile_img ?? 'avatar.jpg'))}}" />
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="block m-t-xs font-bold">{{Auth::user()->name}}</span>
                                <span class="text-muted text-xs block">{{Auth::user()->role == 0 ? 'Administrator' : 'Moderator'}} <b class="caret"></b></span>
                            </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a class="dropdown-item" href="profile">Profile</a></li>
                                <li class="dropdown-divider"></li>
                                <li>
                                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div class="logo-element">
                            NCA
                        </div>
                    </li>
                    <li {{ request()->route()->getName() === 'dashboard' ? "class=active" : '' }}>
                        <a href="{{route('dashboard')}}"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>
                    </li>
                    <li {{ request()->route()->getName() === 'categories' ? "class=active" : '' }}>
                        <a href="{{route('categories')}}"><i class="fa fa-tags"></i> <span class="nav-label">Categories</span></a>
                    </li>
                    <li {{ Str::contains(request()->path(), 'blogs') ? "class=active" : '' }}>
                        <a href="{{route('blogs')}}"><i class="fa fa-file-text-o"></i> <span class="nav-label">Blogs</span></a>
                    </li>



                </ul>
            </div>
        </nav>

        <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
                <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
                    <div class="navbar-header">
                        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>

                    </div>
                    <ul class="nav navbar-top-links navbar-right">
                        <li>
                            <div class="mr-4" style="cursor: pointer; margin-right: 20px; text-decoration:underline;" onclick="document.getElementById('logout-form').submit();">
                                Logout from<strong> Admin?</strong>
                            </div>
                        </li>



                        <!-- <li>
                            <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                <i class="fa fa-sign-out"></i> Log out
                            </a>
                        </li> -->
                    </ul>

                </nav>
            </div>

            <div class="wrapper wrapper-content">
                @yield('content')
            </div>
            <div class="footer">
                <div>
                    <strong>Copyright</strong> NCA Blog &copy; 2023
                </div>
            </div>
        </div>

    </div>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

    <!-- DataTables Buttons -->
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/dataTables.buttons.min.js"></script>


    <script src="{{url('/adminpanel/js/plugins/metisMenu/jquery.metisMenu.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/slimscroll/jquery.slimscroll.min.js')}}"></script>

    <!-- Mainly scripts -->
    <script src="{{url('/adminpanel/js/popper.min.js')}}"></script>
    <script src="{{url('/adminpanel/js/bootstrap.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/metisMenu/jquery.metisMenu.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/slimscroll/jquery.slimscroll.min.js')}}"></script>

    <!-- Flot -->
    <script src="{{url('/adminpanel/js/plugins/flot/jquery.flot.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/flot/jquery.flot.tooltip.min.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/flot/jquery.flot.spline.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/flot/jquery.flot.resize.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/flot/jquery.flot.pie.js')}}"></script>

    <!-- Peity -->
    <script src="{{url('/adminpanel/js/plugins/peity/jquery.peity.min.js')}}"></script>
    <script src="{{url('/adminpanel/js/demo/peity-demo.js')}}"></script>

    <!-- Custom and plugin javascript -->
    <script src="{{url('/adminpanel/js/inspinia.js')}}"></script>
    <script src="{{url('/adminpanel/js/plugins/pace/pace.min.js')}}"></script>

    <!-- jQuery UI -->
    <script src="{{url('/adminpanel/js/plugins/jquery-ui/jquery-ui.min.js')}}"></script>

    <!-- GITTER -->
    <script src="{{url('/adminpanel/js/plugins/gritter/jquery.gritter.min.js')}}"></script>

    <!-- Sparkline -->
    <script src="{{url('/adminpanel/js/plugins/sparkline/jquery.sparkline.min.js')}}"></script>

    <!-- Sparkline demo data  -->
    <script src="{{url('/adminpanel/js/demo/sparkline-demo.js')}}"></script>

    <!-- ChartJS-->
    <script src="{{url('/adminpanel/js/plugins/chartJs/Chart.min.js')}}"></script>

    <!-- Toastr -->
    <script src="{{url('/adminpanel/js/plugins/toastr/toastr.min.js')}}"></script>

    <script>
        // document ready jquery
        $(document).ready(function() {
            $(':input[readonly]').css({
                'background-color': '#ffffff'
            });
            $(':select[disabled]').css({
                'background-color': '#ffffff'
            });
        });
    </script>

</body>

</html>