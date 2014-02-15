## SCSS Mixin

[CSS Nite LP32](http://cssnite.jp/lp/lp32/)の「コピペで使える！変数とmixin！」のセッション中に紹介しているSCSSのMixinです。

## USAGE

``@import``で必要なSCSSファイルを読み込みます。

たとえば、メディアクエリの``_mq.scss``を読み込むためには

```scss
@import "mq";
```

とします。拡張子と先頭の``_``は不要です。

また別ディレクトリにある場合は、以下のように指定します。

```scss
@import "scss/mq";
```

### _output-margin.scss

余白調整用のクラスを生成します。

```scss
@import 'spacing';
@import 'output-margin';
@include output-margin;
```

デフォルトでは、``margin-top`` ``margin-bottom`` を 1px毎に指定したクラスが生成され、20px以降は、10px毎のクラスが50pxまで生成されます。
ネガティブマージンも同様に出力されます。

```css
.mt00 {
  margin-top: 0px !important; }
.mt01 {
  margin-top: 1px !important; }
/*省略*/
.mt20 {
  margin-top: 20px !important; }
.mt30 {
  margin-top: 30px !important; }
/*省略*/
.mtN01 {
  margin-top: -1px !important; }
/*省略*/
.mbN01 {
  margin-bottom: -1px !important; }
```

変更したい場合はmixinの中身を調整してください。

### _rem.scss

px指定と、rem指定を併記する場合に使用します。

```scss
@import 'rem';
html {
	font-size: 62.5%; /*=10px*/
}
.rem {
	@include rem(font-size, 12px);
	@include rem(margin, 1.4rem 1.2rem);
}
```

pxを指定しても、remを指定しても相互変換され、両方の値が書き出されます。

```css
.rem {
	font-size: 12px;
	font-size: 1.2rem;
	margin: 14px 12px;
	margin: 1.4rem 1.2rem;
}
```

なお、以下のようにすることで、pxの出力をやめることができます。

```scss
@import 'rem'
$rem-legacy-support: false;
```

#### 引数

* ``$property`` : プロパティ名
* ``$values``   : remに変換するpx、もしくはpxに変換するrem


### _trbl.scss

画像を、中央揃えすることができます。

```scss
@import 'trbl';
.trbl {
	position: relative;
	img {
		@include trbl;
	}
}
```

画像の親要素をposition: relative;にする必要があります。

```scss
.trbl {
	position: relative;
	.trbl-item {
		@include trbl(100px, 100px);
	}
}
```

また画像でない場合は高さと幅を指定する必要があります。

#### 引数

- ``$width`` : 画像でない場合、幅が必要となります
- ``$height`` : 画像でない場合、高さが必要となります


### _mq.scss

メディアクエリを簡単に記述するためのショートカットです。
引数の説明は以下のコードを参照してください。

```scss
@import 'mq';

@include min-screen(801px) {
	/* 画面の幅が801px以上の時 */
	.block { background-color:red; }
};
@include screen(481px, 800px) {
	/* 画面の幅が481px以上、800以下の時 */
	.block { background-color:green; }
};
@include max-screen(480px) {
	/* 画面の幅が480px以下の時 */
	.block { background-color:blue; }
};
@include min-screen-h(801px) {
	/* 画面の高さが801px以上の時 */
	.block { background-color:tomato; }
};
@include screen-h(481px, 800px) {
	/* 画面の高さが481px以上、800以下の時 */
	.block { background-color:lime; }
};
@include max-screen-h(480px) {
	/* 画面の高さが480px以下の時 */
	.block { background-color:pink; }
};
```

### _link-underline.scss

a要素の下線の有無を操作するものです。

```scss
@import 'link-underline';

a {
	@include link-underline(line-to-none);
}
```

こうすると、以下のように出力されます。

```css
a:link, a:visited {
  text-decoration: underline; }
a:hover, a:active, a:focus {
  text-decoration: none; }
```

引数の文字列により振る舞いを変更します。

* ``line-to-none`` : :link,:visitedは下線あり、それ以外はなし
* ``line`` : どの状態でも下線あり
* ``none-to-line`` : :link,:visitedは下線なし、それ以外はあり
* ``none`` : どの状態でも下線なし

## LICENSE

SCSSファイルにライセンス条項が明記されていない限りすべてパブリック・ドメインとして提供されています。

## 参考

Mixinをつくるにあたって参考にさせていただきました。ありがとうございます。

- <a href="http://www.slideshare.net/kosei27/sass-14212276" >実践Sass 後編</a>
