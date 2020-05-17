package java.prototype;

public class Main {

	public static void main(String[] args) {
		Manager manager = new Manager();
		UnderlinePen upen = new UnderlinePen('~');
		MessageBox mbox = new MessageBox('*');
		MessageBox sbox = new MessageBox('/');
		manager.register("strong message", upen);
		manager.register("warning box", mbox);
		manager.register("slash box", sbox);

		Product p1 = manager.create("strong message");
		p1.use("Hello, world!");
		Product p2 = manager.create("warning box");
		p2.use("Hello, world!");
		Product p3 = manager.create("slash box");
		p3.use("Hello, world!");
	}
}
