@extends('layouts.adminpanel')

@section('content')

<div class="row">
    <div class="col-lg-12">
        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> {{session('success')}}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @elseif(session('error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> {{session('error')}}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif
        <div class="ibox">
            <div class="ibox-title d-flex justify-content-between align-items-center">
                <h5>Categories</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" style="margin-right: -66px !important;" data-bs-target="#addRecord">
                    <i class="fa fa-plus"> </i> Add New Category
                </button>
            </div>
            <div class="ibox-content">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover dataTables-example" id="tickersTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category Name</th>
                                <th>Creation Date</th>
                                <th>Total Blogs</th>
                                <th>Status</th>
                                <th class="">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="ihub-news-records">
                            @foreach($categories as $category)
                            <tr class="gradeX" style="cursor: pointer;">
                                <td>{{$loop->iteration}}</td>
                                <td>{{$category->name}}</td>
                                <td>
                                    @php
                                    $datetime = \Carbon\Carbon::createFromDate($category->created_at);
                                    echo $datetime->format('d/m/y');
                                    @endphp
                                </td>
                                <td>
                                    {{ blog_count($category->id) }}
                                </td>
                                <td>
                                    @if($category->status == 1)
                                    <span class="badge badge-success">Active</span>
                                    @else
                                    <span class="badge badge-danger">Inactive</span>
                                    @endif
                                </td>
                                <td class="">
                                    <button type="button" class="btn btn-light btn-sm btn-block" id="edit_button" data-toggle="tooltip" data-placement="top" data-bs-toggle="modal" title="View or Edit" data-bs-target="#editRecord" data-id="{{$category->id}}" data-status="{{$category->status}}" data-name="{{$category->name}}">
                                        <img width="20" height="20" src="https://img.icons8.com/ios/20/create-new.png" alt="create-new" />
                                    </button>
                                    <!-- <button type="button" class="btn btn-dark btn-sm btn-block" id="edit_button" data-bs-toggle="modal" data-bs-target="#editRecord" data-id="{{$category->id}}" data-name="{{$category->name}}">
                                        <i class="fa fa-edit"> </i> Edit
                                    </button> -->
                                    <button class="delete-button btn btn-light btn-sm btn-block" data-id="{{$category->id}}" data-toggle="tooltip" data-placement="top" title="Delete">
                                        <img width="20" height="20" src="https://img.icons8.com/material-rounded/20/filled-trash.png" alt="filled-trash" />
                                    </button>
                                    <!-- <button class="btn btn-danger btn-sm btn-block delete-button" data-id="{{$category->id}}">
                                        <i class="fa fa-trash"> </i> Delete
                                    </button> -->
                                    <form action="{{ route('categories-delete') }}" id="delForm-{{$category->id}}" method="post">
                                        @csrf
                                        <input type="text" name="id" id="id" value="{{$category->id}}" hidden>
                                        <button type="submit" hidden>Submit</button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Add Record Modal -->
<div class="modal fade" id="addRecord" tabindex="-1" aria-labelledby="addRecord" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Add Category</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{ route('categories-store') }}" method="post" id="addRecordForm">
                    @csrf
                    <div class="row mb-3">
                        <div class="col">
                            <div class="row mb-3">
                                <div class="col">
                                    <h4><label for="exampleInputEmail1" class="form-label">Category Name</label></h4>
                                    <input type="text" class="form-control" name="name" id="name" required>
                                    <div class="invalid-feedback">Name is required.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="addRecordForm" onclick="disableBtn(this)" class="btn btn-primary">Add Category</button>
            </div>
        </div>
    </div>
</div>
<!-- Edit Record Modal -->
<div class="modal fade" id="editRecord" tabindex="-1" aria-labelledby="editRecord" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Edit Category</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{ route('categories-update') }}" method="post" id="editRecordForm">
                    @csrf
                    <input type="text" name="id" id="edit_id" hidden>

                    <div class="row mb-2">
                        <div class="col">
                            <div class="row mb-2">
                                <div class="col-12">
                                    <h4><label for="exampleInputEmail1" class="form-label">Category Name</label></h4>
                                    <input type="text" class="form-control" name="name" id="edit_name" required>
                                    <div class="invalid-feedback">Name is required.</div>
                                </div>
                                <div class="col-12 mt-2">
                                    <h4><label for="exampleInputEmail1" class="form-label">Active Status</label></h4>
                                    <div class="switch">
                                        <div class="onoffswitch">
                                            <input type="checkbox" class="onoffswitch-checkbox" id="status_box" name="status">
                                            <label class="onoffswitch-label" for="status_box">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="editRecordForm" onclick="disableBtn(this)" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
<script>
    function disableBtn(btn) {
        btn.disabled = true;
        btn.innerHTML = 'Please Wait...';
        btn.form.submit();
    }
    $(document).ready(function() {
        $(".alert").delay(2000).slideUp(200, function() {
            $(this).alert('close');
        });
        $('.dataTables-example').DataTable({
            pageLength: 10,
            responsive: true,
        });
        $('[data-toggle="tooltip"]').tooltip();
        $('#editRecord').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id');
            var name = button.data('name');
            $('#edit_name').val(name);
            $('#edit_id').val(id);
            if (button.data('status') == 1) {
                $('#status_box').prop('checked', true);
            } else {
                $('#status_box').prop('checked', false);
            }
        });
        $('.delete-button').click(function() {
            var id = $(this).data('id');
            var deleteForm = $('#delForm-' + id);

            // Show SweetAlert2 confirmation dialog
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this record!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteForm.submit();
                }
            });
        });
    });
</script>
@endsection