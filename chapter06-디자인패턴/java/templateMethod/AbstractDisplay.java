package java.templateMethod;

public abstract class AbstractDisplay {	// 추상 클래스 AbstractDisplay

	public abstract void open();		// 하위 클래스에 구현을 맡기는 추상 메소드(1) open

	public abstract void print();		// 하위 클래스에 구현을 맡기는 추상 메소드(2) print

	public abstract void close();		// 하위 클래스에 구현을 맡기는 추상 메소드(3) close

	public final void display() {		// 추상 클래스에서 구현되고 있는 메소드 display

		open();							// open 한다.

		for (int i = 0; i < 5; i++) {	// 5번 반복
			print();
		}

		close();						// 마지막으로 close한다. display 메소드에서 구현되는 내용이다.
	}
}
