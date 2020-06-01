package java.interpreter;

public class ProgramNode extends Node {

	private Node commandListNode;

	@Override
	public void parse(Context context) throws ParseException {
		context.skipToken("program");
		commandListNode = new CommandListNode();
		commandListNode.parse(context);
	}

	public String toString() {
		return "[program " + commandListNode + "]";
	}

}
