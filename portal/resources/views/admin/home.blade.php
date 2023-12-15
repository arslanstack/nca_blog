@extends('layouts.adminpanel')
@section('content')
<div class="row">
    <div class="col-lg-12">
        <div class="row">
            <div class="wrapper wrapper-content">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <div class="ibox-tools">
                                    <span class="label label-success float-right">Total</span>
                                </div>
                                <h5>Blogs</h5>
                            </div>
                            <div class="ibox-content">
                                <h1 class="no-margins">{{$blogs}}</h1>
                                <div class="stat-percent font-bold text-primary"><a href="{{route('blogs')}}"><span class="label label-primary">View</span></a></div>
                                <small>Blogs</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <div class="ibox-tools">
                                    <span class="label label-info float-right">Total</span>
                                </div>
                                <h5>Categories</h5>
                            </div>
                            <div class="ibox-content">
                                <h1 class="no-margins">{{$categories}}</h1>
                                <div class="stat-percent font-bold text-primary"><a href="{{route('categories')}}"><span class="label label-primary">View</span></a></div>
                                <small>Categories</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
@endsection