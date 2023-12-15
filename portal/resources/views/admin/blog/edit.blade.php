@extends('layouts.adminpanel')

@section('content')

<div class="row">
    <div class="col-lg-12">
        <div class="ibox">
            <div class="ibox-title d-flex justify-content-between align-items-center">
                <h5>Edit Blog</h5>
                <a class="btn btn-primary" href="{{route('blogs')}}" style="margin-right:-72px;"><i class="fa fa-arrow-left"> </i> All Blogs</a>

            </div>
            <div class="ibox-content">
                @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> {{ session('success') }}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                @elseif(session('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {{ session('error') }}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                @endif

                <form action="{{ route('blogs-update') }}" novalidate method="post" id="addRecord" enctype="multipart/form-data">
                    @csrf
                    <input type="text" name="id" value="{{$blog->id}}" hidden>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="title" class="form-label">
                                    <h4>Title</h4>
                                </label>
                                <input type="text" class="form-control" name="title" id="title" value="{{$blog->title}}" required />
                                <div class="invalid-feedback">Title is required.</div>
                            </div>
                            <div class="mb-3">
                                <label for="subtitle" class="form-label">
                                    <h4>Short Description</h4>
                                </label>
                                <textarea class="form-control" required name="subtitle" placeholder="Enter the Short Description" rows="2">{{$blog->subtitle}}</textarea>
                                <div class="invalid-feedback">Short Description is required.</div>

                            </div>
                            <div class="mb-3">
                                <label for="image" class="form-label">
                                    <h4>Featured Image</h4>
                                </label>
                                <input type="file" class="form-control" name="image" id="editImage" accept=".png, .svg, .jpg, .jpeg, .gif" required>
                                <div class="invalid-feedback">Image is required.</div>
                            </div>

                        </div>
                        <div class="col-md-6 my-auto">
                            <label for="editImage" style="cursor: pointer;" class="form-label float-right float-end">
                                <h4>Featured Image Preview</h4>
                                <div id="cropContainer my-auto">
                                    <img id="imageView" src="{{asset('/uploads/blog/'.$blog->image)}}" style=" width:450px; height: auto;" alt="Image View">
                                </div>
                        </div>
                        </label>
                    </div>

                    <div class="row mb-3">
                        <div class="mb-3">
                            <div class="row">

                                <div class="row">
                                    <div class="col-12">
                                        <label for="categories" class="form-label">
                                            <h4>Categories</h4>
                                        </label>
                                        <button class="btn btn-sm btn-success float-right float-end" style="margin-right: -23px;" type="button" data-toggle="modal" data-target="#newCategory">Add New Category</button>

                                    </div>
                                </div>
                                <select class="form-select" name="categories[]" id="categories" multiple aria-label="multiple select example" required>
                                    @foreach($categories as $category)
                                    <option value="{{$category->id}}" @if(in_array($category->id, $blogCategories)) selected @endif>{{$category->name}}</option>
                                    @endforeach
                                </select>

                            </div>

                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">
                                <h4>Slug</h4> <small><b>Slug will automatically update with title.</b></small>
                            </label>
                            <input type="text" disabled class="form-control" name="sluger" id="sluger" value="{{$blog->slug}}" />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">
                                <h4>Blog Description</h4>
                            </label>
                            <textarea class="form-control" required id="content" name="description" placeholder="Enter the Description" rows="10">{!! $blog->description !!}</textarea>
                        </div>
                    </div>
                    <button type="submit" onclick="disableBtn(this)" class="btn btn-primary">Save changes</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="newCategory" tabindex="-1" role="dialog" aria-labelledby="newCategoryTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLongTitle">Add New Category</h3>
            </div>
            <div class="modal-body">
                <div id="categoryError" class="alert alert-danger" style="display: none;"></div>

                <form action="{{ route('categories-add') }}" method="post" id="addCat">
                    @csrf
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            <h4>Category Name</h4>
                        </label>
                        <input class="form-control" id="name" name="name" required>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="closeCategory" data-dismiss="modal">Close</button>
                <button type="submit" onclick="disableCatBtn(this)" id="addCatBtn" class="btn btn-primary">Add Category</button>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    function disableBtn(btn) {
        btn.disabled = true;
        btn.innerText = 'Please Wait...';
        btn.form.submit();
    }

    function disableCatBtn(btn) {
        if ($('#name').val() == '') {
            // $('#categoryError').text('Category Name is required').show();
            return false;
        } else {
            btn.disabled = true;
            btn.innerText = 'Please Wait...';
            $('#addCat').submit();
        }
    }
    $(document).ready(function() {
        $(document).ready(function() {
            $('#categories').select2();
        });
        $('#editImage').change(function() {
            // show the uploaded image in div with id - imageView
            $('#imageView').show();
            $('#imageView').attr('src', URL.createObjectURL(event.target.files[0]));
        });
        $('#addCat').submit(function(e) {
            e.preventDefault();
            var selectedCategories = $('#categories').val();
            // console.log(selectedCategories);
            var formData = new FormData(this);
            formData.append('selected_categories', selectedCategories);
            // console.log(formData);
            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(response) {
                    if (response.error) {
                        // Show the error message inside the same modal
                        $('#categoryError').text(response.error).show();
                        $('#addCatBtn').removeAttr("disabled");
                        $('#addCatBtn').text('Add Category');
                    } else {
                        // If no error, proceed with the success logic
                        $('#categoryError').hide();
                        $('#categories').html(response.html);
                        $('#addCatBtn').removeAttr("disabled");
                        $('#addCatBtn').text('Add Category');
                        $('#closeCategory').trigger('click');
                        $('#addCat').trigger('reset');
                    }
                },
                error: function(response) {
                    // Show the error message inside the same modal
                    console.log(response);
                    var errorMessage = response.responseJSON.error;
                    $('#categoryError').text(errorMessage).show();
                    $('#addCatBtn').removeAttr("disabled");
                    $('#addCatBtn').text('Add Category');
                }
            });
        });
    });
</script>
<script src="https://cdn.ckeditor.com/ckeditor5/40.1.0/super-build/ckeditor.js"></script>

<script>
    CKEDITOR.ClassicEditor.create(document.getElementById("content"), {
        ckfinder: {
            uploadUrl: "{{ route('ckeditor.upload').'?_token='.csrf_token() }}"
        },
        toolbar: {
            items: [
                'selectAll', '|',
                'heading', '|',
                'bold', 'italic', 'underline', 'code', 'removeFormat', '|',
                'bulletedList', 'numberedList', '|',
                'outdent', 'indent', '|',
                'undo', 'redo',
                '-',
                'fontSize', '|',
                'alignment', '|',
                'link', 'insertImage', 'blockQuote', 'insertTable', '|',
                'specialCharacters', '|',
            ],
        },
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        heading: {
            options: [{
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph'
                },
                {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1'
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2'
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3'
                },
                {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4'
                },
                {
                    model: 'heading5',
                    view: 'h5',
                    title: 'Heading 5',
                    class: 'ck-heading_heading5'
                },
                {
                    model: 'heading6',
                    view: 'h6',
                    title: 'Heading 6',
                    class: 'ck-heading_heading6'
                }
            ]
        },
        placeholder: 'Enter Description Here!',

        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true
        },

        link: {
            decorators: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },

        removePlugins: [
            // These two are commercial, but you can try them out without registering to a trial.
            // 'ExportPdf',
            // 'ExportWord',
            'AIAssistant',
            'CKBox',
            'CKFinder',
            'RealTimeCollaborativeComments',
            'RealTimeCollaborativeTrackChanges',
            'RealTimeCollaborativeRevisionHistory',
            'PresenceList',
            'Comments',
            'TrackChanges',
            'TrackChangesData',
            'RevisionHistory',
            'Pagination',
            'WProofreader',
            // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
            // from a local file system (file://) - load this site via HTTP server if you enable MathType.
            'MathType',
            // The following features are part of the Productivity Pack and require additional license.
            'SlashCommand',
            'Template',
            'DocumentOutline',
            'FormatPainter',
            'TableOfContents',
            'PasteFromOfficeEnhanced'
        ]
    });
</script>

@endsection