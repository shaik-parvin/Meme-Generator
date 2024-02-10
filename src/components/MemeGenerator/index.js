import {Component} from 'react'
import {
  MemeContainer,
  Heading,
  FormMemeContainer,
  TextContent,
  Form,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeFontSizeId} =
      this.state

    return (
      <FormMemeContainer
        data-testid="meme"
        backgroundImage={backgroundImageUrl}
      >
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </FormMemeContainer>
    )
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <Form onSubmit={this.onGenerateMeme}>
        <Heading>Meme Generator</Heading>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          id="backgroundImageUrl"
          type="text"
          value={backgroundImageUrlInput}
          placeholder="Enter the Image URL"
          onChange={this.onChangeBackgroundImage}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          value={topTextInput}
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopTextInput}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          type="text"
          value={bottomTextInput}
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomTextInput}
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </Form>
    )
  }

  render() {
    return (
      <MemeContainer>
        {this.renderMeme()}
        {this.renderMemeGeneratorForm()}
      </MemeContainer>
    )
  }
}

export default MemeGenerator
