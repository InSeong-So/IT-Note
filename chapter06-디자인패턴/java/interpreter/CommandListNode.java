package java.interpreter;

import java.util.ArrayList;

public class CommandListNode extends Node {

	private ArrayList list = new ArrayList();

	@Override
	public void parse(Context context) throws ParseException {
		while (true) {
			if (context.currentToken() == null) {
				throw new ParseException("Missing 'end'");
			} else if (context.currentToken().equals("end")) {
				context.skipToken("end");
				break;
			} else {
				Node CommandNode = new CommandListNode();
				CommandNode.parse(context);
				list.add(CommandNode);
			}
		}
	}

	public String toString() {
		return list.toString();
	}
}
