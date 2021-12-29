import { ClienteInterface } from "./ClienteModel";

export interface UsuarioInterface {
    readonly email: string;
    readonly foto: string;
    readonly cliente: ClienteInterface;
    getNome(): string;
}

export default class UsuarioModel implements UsuarioInterface {
    public readonly email!: string;
    public readonly foto!: string;
    public readonly cliente!: ClienteInterface;
    private _nome: string;

    constructor(usuario: UsuarioInterface) {
        this.email = usuario.email;
        this.foto = usuario.foto;
        const nome = (usuario.cliente === null) ? null : usuario.cliente.nome;
        if (nome === null || nome === undefined) {
            const emailNome = this.email.split("@")[0];
            this._nome = emailNome
                .replace("." || "-" || "," || "_", " ")
                .toLowerCase();
        } else {
            this._nome = `${nome} ${usuario.cliente.sobrenome}`;
        }
    }

    getNome(): string {
        return this._nome;
    }

}
