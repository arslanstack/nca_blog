@foreach($categories as $category)
    <option value="{{ $category->id }}" @if(in_array($category->id, $selectedCategories) || $category->id == $newcategory->id) selected @endif>{{ $category->name }}</option>
@endforeach
