@extends('layouts.adminpanel')
@section('content')
<div class="row animated fadeInRight mt-2">
    @if(session('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> {{session('success')}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @elseif(session('failure'))
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Alert!</strong> {{session('failure')}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
    <div class="alert alert-danger alert-dismissible fade show d-none" id="pswd-errors" role="alert">
        <strong>Alert!</strong> <span id="pswd-errors-msg"></span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="col-md-4">
        <div class="ibox">
            <div class="ibox-title">
                <h5>Your Profile</h5>
            </div>
            <div>
                <div class="ibox-content no-padding border-left-right">
                    <label for="profile_img" style="cursor: pointer; display: block;margin-left: auto;margin-right: auto;width: 200px; height: 200px;">
                        <img alt="image" class="img-fluid" id="dpShowLabel" style="cursor: pointer; display: block;margin-left: auto;margin-right: auto;width: 200px; height: 200px;" src="{{asset('uploads/profile/' . (Auth::user()->profile_img ?? 'avatar.jpg'))}}">
                    </label>
                </div>
                <div class="ibox-content profile-content">
                    <small><span class="badge bg-primary">Active</span></small>@if(Auth::user()->role == 0)
                    <span class="badge bg-warning">Administrator</span>
                    @elseif(Auth::user()->role == 0)
                    <span class="badge bg-success">Moderator</span>
                    @endif
                    <h3 class="pt-2"><strong>{{Auth::user()->name}} </strong></h3>
                    <p>
                        <strong>Member Since: </strong>
                        @php
                        $datetime = \Carbon\Carbon::createFromDate(Auth::user()->created_at);
                        echo $datetime->format('d M Y');
                        @endphp
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="row">
            <div class="col-12">
                <div class="ibox ">
                    <div class="ibox-title">
                        <h5>User Details</h5>
                    </div>
                    <div class="ibox-content">
                        <form id="editProfile" autocomplete="off" action="{{route('editProfile')}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="file" name="profile_img" id="profile_img" class="visually-hidden" accept="image/*" hidden onchange="imageName(this)">
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="formGroupExampleInput" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" placeholder="" required id="name" name="name" value="{{Auth::user()->name}}">
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput" class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="" required id="email" name="email" value="{{Auth::user()->email}}">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button type="submit" onclick="disableEditProfileBtn()" id="formSubmitter" class="btn btn-primary float-end">Update</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="ibox ">
                    <div class="ibox-title">
                        <h5>Change Password</h5>
                    </div>
                    <div class="ibox-content">
                        <form id="editPassword" autocomplete="off" action="{{route('editPassword')}}" method="post">
                            @csrf
                            <div class="row mb-2">
                                <div class="col">
                                    <label for="password" class="form-label">New Password</label>
                                    <input type="password" name="password" id="password" class="form-control" autocomplete="off">
                                </div>
                                <div class="col">
                                    <label for="c_password" class="form-label">Confirm Password</label>
                                    <input type="password" name="c_password" id="c_password" class="form-control" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label>
                                        <input type="checkbox" id="showPassword"> Show Password
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <button type="submit" id="PasswordFormSubmitter" class="btn btn-primary float-end">Change Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    function imageName(input) {
        var dpShowLabel = document.getElementById('dpShowLabel');
        console.log(input.files[0]);
        dpShowLabel.src = URL.createObjectURL(input.files[0]);
    }
</script>
<script>
    function disableEditProfileBtn() {
        document.getElementById('formSubmitter').disabled = true;
        document.getElementById('formSubmitter').innerHTML = 'Please Wait...';
        document.getElementById('editProfile').submit();
    }
    document.querySelector('#editPassword').addEventListener('submit', function(e) {
        if (!validatePassword()) {
            e.preventDefault();
        } else if (validatePassword()) {
            document.getElementById('PasswordFormSubmitter').disabled = true;
            document.getElementById('PasswordFormSubmitter').innerHTML = 'Please Wait...';
            document.getElementById('editPassword').submit();
        }

    });

    function validatePassword() {
        var password = document.getElementById('password').value;
        var c_password = document.getElementById('c_password').value;

        if (password.length < 8) {
            document.getElementById('pswd-errors').classList.remove('d-none');
            document.getElementById('pswd-errors-msg').innerHTML = 'Password must be at least 8 characters long.';
            return false;
        }

        if (password !== c_password) {
            document.getElementById('pswd-errors').classList.remove('d-none');
            document.getElementById('pswd-errors-msg').innerHTML = 'Passwords do not match.';
            return false;
        }
        document.getElementById('pswd-errors').classList.add('d-none');
        return true;
    }

    // Get the password input elements
    var passwordInput = document.getElementById('password');
    var cPasswordInput = document.getElementById('c_password');

    // Get the show password checkbox
    var showPasswordCheckbox = document.getElementById('showPassword');

    // Add an event listener to the checkbox
    showPasswordCheckbox.addEventListener('change', function() {
        // Determine whether to show or hide the password based on the checkbox state
        var passwordType = this.checked ? 'text' : 'password';

        // Set the password input types accordingly
        passwordInput.type = passwordType;
        cPasswordInput.type = passwordType;
    });
</script>
@endsection