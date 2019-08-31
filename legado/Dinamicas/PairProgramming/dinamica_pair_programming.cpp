#include <iostream>
#include <queue>

using namespace std;

int main() {
	
	int n;

	while (scanf("%d", &n), n != 0) {
				
		queue<int> q;
		for (int i = 1; i <= n; ++i) {
			q.push(i);
		}
		
		queue<int> popped;
		
		while (q.size() > 1){
			int c = q.front();
			q.pop();
			popped.push(c);
			int p = q.front();
			q.pop();
			q.push(p);
		}
		
		printf("Discarded cards: ");

		while (popped.size() > 0) {
			int c = popped.front();
			popped.pop();
			printf("%d", c);
			if (popped.size() > 0) {
				printf(", ");
			} else {
				printf("\n");
			}
		}
		

		printf("Remaining card: %d\n", q.front());
	}

	return 0;
}
