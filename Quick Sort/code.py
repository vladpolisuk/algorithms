def quick_sort(array):
	if len(array) < 2: return array
	pivot = array[0]
	less = quick_sort([i for i in array if i < pivot])
	greater = quick_sort([i for i in array if i > pivot])
	return less + [pivot] + greater

arr = [25, 651, 2, 65, 12, 6, 1, 6, 89, 57]
print(quick_sort(arr))