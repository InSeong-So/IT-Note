package java.chain_of_responsibility;

public class Trouble {

	private int number;

	public Trouble(int number) {
		this.number = number;
	}

	public int getNumber() {
		return number;
	}

	public String toString() {
		return "[Trouble " + number + "]";
	}
}
