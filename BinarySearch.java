// package searching;

public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {-12, -10, -7, -2, 0, 3, 9, 13, 23, 56, 78, 91};
        int target = 23;
        int result = binarySearch(arr, target);
        System.out.println(result);
    }

    static int binarySearch(int[] arr, int target){
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            // Compare target with the value at arr[mid]
            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid; 
            }
        }

        return -1;
    }
}
