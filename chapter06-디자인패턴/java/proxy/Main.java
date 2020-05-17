package java.proxy;

public class Main {

	public static void main(String[] args) {
		Printable p = new PrinterProxy("Alice");
		System.out.println("이름은 현재 " + p.getPrinterName() + "입니다.");
		p.setPrinterName("Bob");
		System.out.println("이름은 현재 " + p.getPrinterName() + "입니다.");
		p.print("Hello, world.");
	}
}
