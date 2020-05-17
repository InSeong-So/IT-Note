package java.adapter.instanceEx;

public class Banner {
	private String string;

	public Banner(String string) {
		this.string = string;
	}

	public void showWithparen() {
		System.out.println("(" + string + ")");
	}

	public void showWithAster() {
		System.out.println("*" + string + "*");
	}
}
