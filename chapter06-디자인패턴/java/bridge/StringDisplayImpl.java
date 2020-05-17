package java.bridge;

public class StringDisplayImpl extends DisplayImpl {

	private String string;
	private int width;

	public StringDisplayImpl(String string) {
		this.string = string;
		this.width = string.getBytes().length;
	}

	@Override
	public void rawOpen() {
		printLine();
	}

	@Override
	public void rawPrint() {
		System.out.println("|" + string + "|");
	}

	@Override
	public void rawClose() {
		printLine();

	}

	private void printLine() {
		System.out.println("+");
		for (int i = 0; i < width; i++) {
			System.out.println("-");
		}
		System.out.println("+");
	}
}
