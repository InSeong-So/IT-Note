package java.mediator;

import java.awt.Checkbox;
import java.awt.CheckboxGroup;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

public class ColleagueCheckbox extends Checkbox implements ItemListener, Colleague {

	private Mediator mediator;

	public ColleagueCheckbox(String caption, CheckboxGroup group, boolean state) {

		super(caption, group, state);
	}

	@Override
	public void setMediator(Mediator mediator) {
		this.mediator = mediator;

	}

	@Override
	public void setColleagueEnabled(boolean enabled) {
		setEnabled(enabled);

	}

	@Override
	public void itemStateChanged(ItemEvent e) {
		mediator.colleagueChanged();

	}

}
