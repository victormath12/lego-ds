# Tema e Tokens

Nossas definições de cores, espaçamentos, font-sizes e demais propriedades de estilo seguem o modelo de Design Tokens, que são **variáveis semânticas de estilo espelhadas entre design e tecnologia**, permitindo que todos falem a mesma língua em relação a estilos. Com auxílio de theme providers conseguimos tornar nosso Design System multimarca alterando os tokens de acordo com o branding de cada produto da companhia.

É importante perceber que os tokens do Design System vão muito além de variáveis semânticas de estilo, além de garantir o espelhamento, elas também:

* são multiplataformas (Android, iOS, Web)
* são geradas em múltiplos formatos (json, ios.json, xml, scss)
* são espelhadas em design e todas as plataformas de tecnologia
* contemplam decisões pouco comuns em tokens, exemplo: espaçamento e animações
* possuem os breakpoints como desktop-first

Nesse contexto podemos considerar o conjunto de tokens do Design System, como um theme.

## Exemplo de theme: XP

### Colors

<br />
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #FFC709; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-brand-pure<br/>
    #FFC709
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #FFE799; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-brand-01<br/>
    #FFE799
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #E0AD00; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-brand-02<br/>
    #E0AD00
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #B88D00; width: 70px; height:70px; border-radius: 4px; ">&nbsp;</div>
    color-brand-03<br/>
    #B88D00
</div> 

<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #121212; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-neutral-dark-pure<br/>
    #121212
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #666666; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-neutral-dark-01<br/>
    #666666
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #3D3D3D; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-neutral-dark-02<br/>
    #3D3D3D
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #1F1F1F; width: 70px; height:70px; border-radius: 4px; ">&nbsp;</div>
    color-neutral-dark-03<br/>
    #1F1F1F
</div> 

<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #FFFFFF; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-neutral-light-pure<br/>
    #FFFFFF
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #F0F0F0; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-neutral-light-01<br/>
    #F0F0F0
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #CCCCCC; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-neutral-light-02<br/>
    #CCCCCC
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #B8B8B8; width: 70px; height:70px; border-radius: 4px; ">&nbsp;</div>
    color-neutral-light-03<br/>
    #B8B8B8
</div> 

<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #0A9E5A; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-feedback-sucess<br/>
    #0A9E5A
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #505AFF; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-feedback-info<br/>
    #505AFF
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #CC3333; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-feedback-error<br/>
    #CC3333
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #D77B0A; width: 70px; height:70px; border-radius: 4px; ">&nbsp;</div>
    color-feedback-warning<br/>
    #D77B0A
</div> 

<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #0A9E5A; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-buy<br/>
    #0A9E5A
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #EF0000; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-sale<br/>
    #EF0000
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #0A9E5A; width: 70px; height:70px; border-radius: 4px;">&nbsp;</div>
    color-high<br/>
    #0A9E5A
</div> 
<div style="display: inline-block; margin-right: 12px; width: 150px;">
    <div style="background-color: #CC3333; width: 70px; height:70px; border-radius: 4px; ">&nbsp;</div>
    color-low<br/>
    #CC3333
</div> 

## Opacity 
Token | Value
------------ | -------------
semi-opaque | 0.8
intense | 0.64 
medium | 0.40
light | 0.16

## Box Shadow 
Token | Value
------------ | -------------
level-1 | 0 4px 8px 0 rgba(0, 0, 0, 0.16)
level-2 | 0 8px 16px 0 rgba(0, 0, 0, 0.16)
level-3 | 0 16px 32px 0 rgba(0, 0, 0, 0.16)
level-4 | 0 24px 48px 0 rgba(0, 0, 0, 0.16)

## Border Radius 
Token | Value
------------ | -------------
default | 0
small | 4px
medium | 8px
large| 24px
pill| 500px

## Border Style
Token | Value
------------ | -------------
default | solid


## Border Width
Token | Value
------------ | -------------
default | 0
thin | 1px
thick | 2px
thicker | 4px

## Spacing 
Token | Value
------------ | -------------
inline-xxxs | 4px
inline-xxs | 8px 
inline-xs | 16px
inline-sm | 16px
inline-md | 32px
inline-lg | 48px
inline-xl | 64px
inset-xs | 4px
inset-sm | 8px
inset-md | 16px
inset-lg | 24px
inset-xlg | 32px
inset-xxlg | 48px
stack-xxxs | 4px
stack-xxs | 8px
stack-xs | 16px
stack-sm | 24px
stack-md | 32px
stack-lg | 48px
stack-xl | 64px
stack-xxl | 96px
stack-xxxl | 128px

## Font Size 

Token | Value
------------ | -------------
us | 12px
xxxs | 14px
xxs | 16px
xs | 20px
sm | 24px
md | 32px
lg | 40px
xl | 48px
xxl | 56px
xxxl | 64px
ul | 80px

## Font Weight 

Token | Value
------------ | -------------
regular | 300;
medium | 500
bold | 700

## Font Family 

Token | Value
------------ | -------------
base | "Roboto"
highlight | "Roboto Slab"

## Line Height 

Token | Value
------------ | -------------
rule-1 | 1
rule-2 | 1.1
rule-3 | 1.5

## Grid 

Token | Value
------------ | -------------
xs | { columns: 4, width: 60 }
sm | { columns: 8, width: 48 }
md | { columns: 8, width: 64 }
lg | { columns: 12, width: 64 }
xl | { columns: 12, width: 72 }
gutter | 16
margin | 0 12px

## Breakpoint 

Token | Value
------------ | -------------
xs | max-width: 599px
sm | max-width: 767px
md | max-width: 1023px
lg | max-width: 1365px

###### desktop first

## Motion Velocity 

Token | Value
------------ | -------------
superfast | 100
fast | 200
medium | 300
slow | 400

## Motion Vibe 

Token | Value
------------ | -------------
supersoft | cubic-bezier(0.48, 0, 0.35, 1)
calm | cubic-bezier(0.08, 0, 0.35, 1)
energetic | cubic-bezier(0.64, 0, 0.92, 1)

## Motion Delay 

Token | Value
------------ | -------------
instantly | 0
quickly | 100
promptyly | 300