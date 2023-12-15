<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NCA Blog | Admin</title>
    <link href="{{ asset('adminpanel/css/bootstrap.min.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link href="{{ asset('adminpanel/font-awesome/css/font-awesome.css') }}" rel="stylesheet">
    <link href="{{ asset('adminpanel/css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('adminpanel/css/style.css') }}" rel="stylesheet">

    <style>
        body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }

        .middle-box {
            max-width: 400px;
            width: 100%;
        }

        .ibox-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        }
    </style>
</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div class="ibox-content">
                <h3>Welcome to NCA Blog</h3>
                <p>Admin Panel</p>
                <p>Login in to access dashboard.</p>
                @error('email')
                <div class="alert alert-danger">
                    Invalid Email or Password
                </div>
                @enderror
                @error('password')
                <div class="alert alert-danger">
                    Invalid Email or Password
                </div>
                @enderror
                <form class="m-t" role="form" method="POST" action="{{ route('admin-login') }}">
                    @csrf

                    <div class="form-group">
                        <input id="email" placeholder="Email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    </div>
                    <div class="form-group">
                        <input id="password" placeholder="Password" type="password" class="form-control" name="password" required autocomplete="current-password">
                    </div>
                    <button type="submit" onclick="disableBtn(this)" class="btn btn-primary block full-width m-b">Login</button>

                </form>

                <p class="m-t">
                    <small>NCA Blog Administration Panel &copy; 2023</small>
                </p>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script>
    function disableBtn(btn) {
        btn.disabled = true;
        btn.innerText = 'Please Wait...';
        btn.form.submit();
    }
</script>

</html>