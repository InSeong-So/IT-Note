package java.templateMethod;

public class CharDisplay extends AbstractDisplay {	// Chardisplay는 AbstractDisplay의 하위 클래스

	private char ch;								// 표시해야 할 문자.

	public CharDisplay(char ch) {					// 생성자에게 전달된 문자 ch를 필드에 기억한다.
		this.ch = ch;
	}

	@Override
	public void open() {							// 상위 클래스에서는 추상 메소드
		System.out.print("<<<");					// 오버라이드로 구현
	}

	@Override
	public void print() {							// display에서 반복해서 호출
		System.out.print(ch);						// 필드에 기억해 둔 문자를 1개 표시한다.
	}

	@Override
	public void close() {
		System.out.println(">>>");
	}
}
