package java.chain_of_responsibility;

public class NoSupport extends Support {

	public NoSupport(String name) {
		super(name);
	}

	protected boolean resolve(Trouble trouble) {
		return false;
	}

}
