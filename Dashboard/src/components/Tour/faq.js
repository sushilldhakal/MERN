export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqCount: 0,
      main_div_class: "accordion__item show"
    };
    this.handleAddingFaq = this.handleAddingFaq.bind(this);
    this.removeDIv = this.removeDiv.bind(this);
  }
  handleAddingFaq() {
    this.setState({
      faqCount: this.state.faqCount + 1
    });
  }

  removeDiv() {
    this.setState({ main_div_class: "accordion__item hide" });
  }

  renderFaq() {
    let faqCount = this.state.faqCount,
      faqItems = [];
    while (faqCount--)
      faqItems.push(
        <AccordionItem key={faqCount} className={this.getInitialState}>
          <AccordionItemHeading>
            <AccordionItemButton>FAQs {faqCount + 1}</AccordionItemButton>
          </AccordionItemHeading>
          <Button className="btn btn-danger btn-sm" onClick={this.removeDiv}>
            <i className="material-icons">close</i>
          </Button>
          <AccordionItemPanel>
            <h6>FAQs Question</h6>
            <input type="text" />
          </AccordionItemPanel>
        </AccordionItem>
      );

    return faqItems;
  }
  render() {
    return (
      <div>
        <Accordion allowMultipleExpanded={true}>{this.renderFaq()}</Accordion>
        <Button
          theme="accent"
          size="sm"
          className="ml-auto float-right mt-3"
          type="submit"
          onClick={this.handleAddingFaq}
        >
          <i className="material-icons">file_copy</i> {"Add FAQs"}
        </Button>
      </div>
    );
  }
}
