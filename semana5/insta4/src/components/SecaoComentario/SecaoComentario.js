import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorDoInput: ""
	}

	onChangeComentario= (event) =>{
		
		this.setState({
			
			valorDoInput: event.target.value})
			
			console.log(this.state.valorDoInput)
	}
	
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorDoImput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
