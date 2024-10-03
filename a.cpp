#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int mejority2(vector<int> &num)
{
    int n = num.size();

    sort(num.begin(), num.end());

    int freq = 1, ans = num[0];
    for (int i = 1; i < n; i++)
    {
        if (num[i] == num[i - 1])
        {
            freq++;
        }
        else
        {
            freq = 1;
            ans = num[i];
        }

        if (freq > n / 2)
        {
            return ans;
        }
    }
    return ans;
}

int main()
{
    vector<int> vec = {1, 2, 2, 1, 1, 1};

    int ans = mejority2(vec);
    cout << "Majority Element: " << ans << endl;

    return 0;
}
